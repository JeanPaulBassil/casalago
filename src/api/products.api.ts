import { Product } from './models/Product'
import { ApiResponse } from './utils'
import { AbstractApi, ApiRequestParams } from './utils/AbstractApi'

export class ProductApi extends AbstractApi<Product> {
  readonly path = 'products'
  constructor() {
    super('products')
  }

  async getProducts(params: ApiRequestParams): Promise<ApiResponse<Product[]>> {
    const queriesCopy = { ...params.queries }

    console.log('before queriesCopy', queriesCopy)

    if (queriesCopy.name === '') {
      delete queriesCopy.name
    }

    console.log('after queriesCopy', queriesCopy)

    const response = (await this.doFetch({
      queries: queriesCopy,
      requestOptions: {
        method: 'GET',
      },
    })) as ApiResponse<Product[]>
    return response
  }

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    const response = (await this.doFetch({
      requestOptions: {
        method: 'GET',
      },
      pathExtension: id,
    })) as ApiResponse<Product>
    return response
  }

  async getAllCategories(): Promise<ApiResponse<string[]>> {
    const response = (await this.doFetch({
      requestOptions: {
        method: 'GET',
      },
      pathExtension: 'categories',
    })) as unknown as ApiResponse<string[]>
    return response
  }
}
