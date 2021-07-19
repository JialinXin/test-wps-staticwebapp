module.exports = async function (context, req, wpsReq) {
    if (!wpsReq.request.valid)
    {
      console.log(`invlid request: ${wpsReq.response.message}.`);
      return wpsReq.response;
    }
  
    context.bindings.webPubSubEvent = {
      "operationKind": "sendToAll",
      "message": JSON.stringify({
          from: '[System]',
          content: `${wpsReq.connectionContext.userId} disconnected.`
        }),
      "dataType" : "json"
    };
    context.done();
  };