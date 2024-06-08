import { getAudioList, addAudio, deleteAudio, updateAudio } from '@/service/main/vga/audio'
import { defineStore } from 'pinia'
import type { IAudio, IUploadAudio, IModifiedAudio } from '@/types'

interface IAudioState {
  audioList: any[]
}

const useAudioStore = defineStore('audioStore', {
  state: (): IAudioState => ({
    audioList: []
  }),
  actions: {
    async fetchAllAudioAction(audioList: IAudio) {
      console.log('请求', audioList)

      const response = await getAudioList(audioList)
      this.audioList = response.data
    },
    async addAudioAction(newAudio: IUploadAudio) {
      const response = await addAudio(newAudio)
      console.log(response)
      this.fetchAllAudioAction({})
    },
    async updateAudioAction(modifiedAudio: IModifiedAudio) {
      const response = await updateAudio(modifiedAudio)
      console.log(response)

      this.fetchAllAudioAction({})
    },
    async deleteAudioAction(id: number) {
      const response = await deleteAudio(id)
      console.log(response)

      this.fetchAllAudioAction({})
    }
  }
})

export default useAudioStore
