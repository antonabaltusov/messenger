import { request } from "../../api"
import { getGistsFailure, getGistsStart, getGistsSuccess } from "./actions"

export const API_URL_PUBLIC = "https://api.github.com/gists/public"

export const API_URL_SEARCH_GIST = (name) =>
  `https://api.github.com/users/${name}/gists`

export const getAllGists = (query) => async (dispatch) => {
  dispatch(getGistsStart())

  try {
    const {data} = await request.get(API_URL_SEARCH_GIST(query), true)
    // if (!res.ok) {
    //   throw new Error(`Request failed with status ${res.status}`)
    // }

    // const result = await res.json()

    dispatch(getGistsSuccess(data))
  } catch (err) {
    dispatch(getGistsFailure(err.message))
  }
}

