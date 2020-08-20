import LoginView from '@/login/LoginView.vue'
import LoginPanel from '@/login/LoginPanel.vue'
import LobbyView from '@/lobby/LobbyView.vue'
import AmqSongView from '@/amq-song/AmqSongView.vue'
import AmqSongPanel from '@/amq-song/AmqSongPanel.vue'
import EmojiPanel from '@/emoji/EmojiPanel.vue'
import EmojiView from '@/emoji/EmojiView.vue'
import ChatBotPanel from '@/chat-bot/ChatBotPanel.vue'
import ChatBotView from '@/chat-bot/ChatBotView.vue'
import AmqRoomListPanel from '@/amq-game/AmqRoomListPanel.vue'
import AmqRoomListView from '@/amq-game/AmqRoomListView.vue'
import AmqGamePanel from '@/amq-game/AmqGamePanel.vue'
import AmqGameView from '@/amq-game/AmqGameView.vue'
import LobbyPanel from '@/lobby/LobbyPanel.vue'
import AwqWeaponPanel from '@/awq-weapon/AwqWeaponPanel.vue'
import AwqWeaponView from '@/awq-weapon/AwqWeaponView.vue'

const PANEL_COMPONENTS: { [key: string]: any } = {
  login: LoginPanel,
  lobby: LobbyPanel,
  amq_song: AmqSongPanel,
  emoji: EmojiPanel,
  chat_bot: ChatBotPanel,
  amq_game_room_list: AmqRoomListPanel,
  amq_game: AmqGamePanel,
  awq_weapon: AwqWeaponPanel
}

const VIEW_COMPONENTS: { [key: string]: any } = {
  login: LoginView,
  lobby: LobbyView,
  amq_song: AmqSongView,
  emoji: EmojiView,
  chat_bot: ChatBotView,
  amq_game_room_list: AmqRoomListView,
  amq_game: AmqGameView,
  awq_weapon: AwqWeaponView
}

export {PANEL_COMPONENTS, VIEW_COMPONENTS}
