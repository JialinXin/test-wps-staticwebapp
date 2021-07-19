module.exports = async function (context, req, wpsReq) {
    if (!wpsReq.request.valid)
    {
      console.log(`invalid request: ${wpsReq.response.StatusCode}.`);
      return wpsReq.response;
    }
  
    context.bindings.webPubSubEvent = [];
    context.bindings.webPubSubEvent.push({
      "operationKind": "sendToAll",
      "message": JSON.stringify({
          from: '[System]',
          content: `${wpsReq.connectionContext.userId} connected.`
        }),
      "dataType" : "json"
    });
  
    context.bindings.webPubSubEvent.push({
      "operationKind": "addUserToGroup",
      "userId": `${wpsReq.connectionContext.userId}`,
      "group": "group1"
    });
  
    context.bindings.webPubSubEvent.push({
      "operationKind": "sendToAll",
      "message": JSON.stringify({
            from: '[System]',
            content: `${wpsReq.connectionContext.userId} joined group: group1.`
        }),
      "dataType": "json"
    });
    context.done();
  };