
export default interface TUserSettingsParam {
  limit: number
  has_breeds: number
  mime_types: string | number
  category_ids: number
  breeds_ids: string | number
  [key: string]: number | string | boolean
}
