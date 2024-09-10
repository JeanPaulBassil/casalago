'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductApi } from '@/api/products.api'
import useOrderedQueries from '@/hooks/useQueries'
import { Autocomplete, AutocompleteItem, Avatar, Input, Link, Select, SelectItem, Spinner } from '@nextui-org/react'
import { Product } from '@/api/models/Product'
import useDebouncedCallback from '@/hooks/useDebounceCallback'
import { ServerError } from '@/api/utils'
import { Search } from 'lucide-react'
import PlaceListItem from '../_components/PlaceListItem'
import BlurFade from '../_components/magic-ui/BlurFade'
import { BrandApi } from '@/api/brand.api'

type Props = {}

const page = (props: Props) => {
  const productApi = new ProductApi()
  const brandApi = new BrandApi()

  const [searchProducts, setSearchProducts] = useState<string>('')
  const { get: getQueries, set: setQueries } = useOrderedQueries<{
    name: string
  }>({
    name: '',
  })

  const debounceName = useDebouncedCallback((value: string) => {
    setQueries({ name: value })
  }, 500)

  const { data: brands, isLoading: isLoadingBrands } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const response = await brandApi.getBrands({ queries: { name: '' } })
      return response.payload
    },
  })

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], ServerError>({
    queryKey: ['products', getQueries()],
    queryFn: async () => {
      const response = await productApi.getProducts({ queries: getQueries() })
      return response.payload
    },
  })

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await productApi.getAllCategories()
      return response.payload
    },
  })

  console.log('brands', brands)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <Input
          placeholder="Search"
          startContent={<Search />}
          radius="sm"
          variant="bordered"
          className="max-w-[400px]"
          value={searchProducts}
          isClearable
          size="lg"
          onChange={(e) => {
            setSearchProducts(e.target.value)
            debounceName(e.target.value)
          }}
          onClear={() => {
            setSearchProducts('')
            setQueries({ name: '' })
          }}
        />
      </div>

      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      ) : !products ? (
        <div className="flex h-screen items-center justify-center">
          <p>No products found</p>
        </div>
      ) : (
        <div
          className={cn(
            'mt-4 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          )}
        >
          {products.map((product, index) => (
            <BlurFade inView delay={0.1 + 0.1 * index} key={product.name}>
                <PlaceListItem
                  key={product.name}
                  name={product.name}
                  imageSrc={product.images[0]}
                  description={product.description}
                  id={index.toString()}
                  href={`/products/${product.id}`}
                  price={0}
                />
            </BlurFade>
          ))}
        </div>
      )}
    </div>
  )
}

export default page
