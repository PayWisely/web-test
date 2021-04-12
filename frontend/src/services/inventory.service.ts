import axios, { AxiosInstance } from 'axios'

export class InventoryService {
  http: any

  constructor() {
    this.http = axios.create({ baseURL: 'http://localhost:9090/' })
  }  

  async get(url: string) {
    return await this.http.get(url).then((response: any) => {
        console.log('inventory service get ok', response)
        return response.data.items
      }).catch((error: any) => {
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
        console.log('inventory service post error', error)
        throw error
      })
  }

  add(data: any) {
    return this.post('inventory/create', data)
  }
  list(query: any) {
    return this.get(`inventory/${query}`)
  }
}

const service = new InventoryService()
export default service