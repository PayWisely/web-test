import axios, { AxiosInstance } from 'axios'

export class InventoryService {
  http: any

  constructor() {
    this.http = axios.create({ baseURL: 'http://localhost:8080/api/' })
  }  

  async get(url: string, queryValue: any) {
    return await this.http.get(url, {
        params: {
          date: queryValue
        }
      }).then((response: any) => {
        // TODO?
        console.log('inventory service get ok', response)
        return response
      }).catch((error: any) => {
        // TODO?
        console.log('inventory service get error', error)
        return [];
      })
  }

  async post(url: string, body: any) {
    return await this.http.post(url, body)
      .then((response: any) => {
        // TODO?
        console.log('inventory service post ok', response)
        return response
      }).catch((error: any) => {
        // TODO?
        console.log('inventory service post error', error)
        throw error
      })
  }

  add(data: any) {
    return this.post('inventory/create', data)
  }
  list(query: any) {
    return this.get('inventory', query)
  }
}

const service = new InventoryService()
export default service