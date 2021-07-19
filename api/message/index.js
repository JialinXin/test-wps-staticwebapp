module.exports = async function (context, req, wpsReq) {
    if (!wpsReq.request.valid)
    {
      return wpsReq.response;
    }
    
    context.bindings.webPubSubEvent = {
      "operationKind": "sendToAll",
      "message": wpsReq.request.message,
      "dataType": wpsReq.request.dataType
    };
    return { body: { from: '[System]', content: 'ack.'} };
};