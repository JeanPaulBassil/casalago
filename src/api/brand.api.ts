import { Brand, CreateBrand } from './models/Brand'
import { ApiResponse } from './utils'
import { AbstractApi, ApiRequestParams } from './utils/AbstractApi'

export class BrandApi extends AbstractApi<Brand> {
  readonly path = 'brands'
  constructor() {
    super('brands')
  }

  public async getBrands(params: ApiRequestParams): Promise<ApiResponse<Brand[]>> {
    const response = (await this.doFetch({
      queries: params.queries,
      requestOptions: {
        method: 'GET',
      },
    })) as ApiResponse<Brand[]>

    return response
  }
}
