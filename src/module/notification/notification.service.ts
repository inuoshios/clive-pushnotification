import axios from "axios";
import config from "../../config";

// xaxak85766@wifame.com
const imageLink = "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.zikorabank.com%2F&psig=AOvVaw20kndogBmKJqWzO8debiti&ust=1677851773836000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIj_luyyvf0CFQAAAAAdAAAAABAE";

// TODO: Add a custom error logger if you have the chance.

type requestBody = {
  title: string;
  body: string;
  playerId?: string;
};

export const sendNotification = async (payload: requestBody) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic " + config.appKey,
  };
  const url = "https://onesignal.com/api/v1/notifications";
  const body = {
    app_id: config.appId,
    headings: { en: payload.title },
    contents: { en: payload.body },
    included_segments: ["All"],
    content_available: true,
    small_icon: imageLink
  };

  try {
    const { status, data } = await axios.post(url, body, { headers: headers });
    return { code: status, data };
  } catch (e) {
    //@ts-ignore
    return { code: (e as Error).response.status, data: (e as Error).response.data };
  }
};

export const sendNotificationById = async (payload: requestBody) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic " + config.appKey,
  };
  const url = "https://onesignal.com/api/v1/notifications";
  const body = {
    app_id: config.appId,
    headings: { en: payload.title },
    contents: { en: payload.body },
    included_segments: ["include_player_id"],
    include_player_id: [payload.playerId!],
    content_available: true,
    small_icon: imageLink
  };

  try {
    const { status, data } = await axios.post(url, body, { headers: headers });
    return { code: status, data };
  } catch (e) {
    //@ts-ignore
    return { code: (e as Error).response.status, data: (e as Error).response.data };
  }
};
// external userId
// playerId

