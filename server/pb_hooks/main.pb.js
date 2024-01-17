routerAdd("GET", "/custom_signup/:invitation_code", (c) => {
    let invitation_code = c.pathParam("invitation_code")
    const result = new DynamicModel({
        // describe the shape of the data (used also as initial values)
        "id":     "",
        "code": false
    })
    
    $app.dao().db()
        .newQuery("SELECT code FROM invite_codes WHERE code={:code}")
        .bind({
            "code" : invitation_code
        })
        .one(result);
    
    console.log(result)

    return c.json(200, {"message": "Hello!"})
})