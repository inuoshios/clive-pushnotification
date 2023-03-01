import axios from "axios";
import config from "../../config";

// xaxak85766@wifame.com

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
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: payload.title
    }
  };

  try {
    const data = await axios.post(url, body, { headers: headers });
    return { code: 200, data: data.data };
  } catch (e) {
    console.log(e);
    return { code: 404, data: (e as Error).message };
  }
}

