module.exports =async(client) => {

    client.user.setPresence({
        game: {
            name: "Use .h"
        }
    })
}
