import axios from "axios";
import config from "../../config";

// xaxak85766@wifame.com
const imageLink = "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.zikorabank.com%2F&psig=AOvVaw20kndogBmKJqWzO8debiti&ust=1677851773836000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIj_luyyvf0CFQAAAAAdAAAAABAE";

type requestBody = {
  title: string;
  body: string;
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
    const data = await axios.post(url, body, { headers: headers });
    return { code: 200, data: data.data };
  } catch (e) {
    console.log(e);
    return { code: 404, data: (e as Error).message };
  }
}

