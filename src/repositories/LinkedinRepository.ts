import axios, { type AxiosInstance } from 'axios'
import { linkedinProfile } from '@/mock/linkedin-profile'

export default class LinkedInRepository {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.linkedin.com/v2',
      headers: {
        Authorization: `Bearer SEU_TOKEN_DE_ACESSO_AQUI`,
        Accept: 'application/json'
      }
    })
  }

  async searchProfile(profileId: string) {
    const response = await this.client.get(`/people/${profileId}`)
    return response.data
  }

  async mockSearchProfile() {
    return linkedinProfile
  }
}
