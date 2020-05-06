import {IChoices, ISong} from '../../../shared/interfaces/database'
import {ILoginMode} from '@/assets/types'

interface IRooteStoreState {

}

interface IListStoreState {
  songList: Array<ISong>
  users: Array<string>
  userSongs: Set<string>
  currentUser: string
  choices: IChoices
}

interface IClientStoreState {
  admin: boolean
  loginMode: ILoginMode
}

export {IListStoreState, IRooteStoreState, IClientStoreState}
