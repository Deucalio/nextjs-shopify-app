const ordersCreateHandler = async (
  topic,
  shop,
  webhookRequestBody,
  webhookId,
  apiVersion
) => {
  try {
    const webhookBody = JSON.parse(webhookRequestBody);
    console.log("Orders/Create webhook was called", webhookBody);
  } catch (e) {
    console.error(e);
  }
};

export default ordersCreateHandler;
