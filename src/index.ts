import { Client, ClientMode } from "@buape/carbon";
import PingCommand from "./commands/ping.js";
import { serve } from "bun";

serve({

    fetch(request, server) {
        const client = new Client(
{
            mode: ClientMode.Bun, 
            clientId: process.env.CLIENT_ID as string,
            publicKey: process.env.PUBLIC_KEY as string, 
            token: process.env.DISCORD_TOKEN as string,
            port: 3000
        },
[new PingCommand()]);

        const response = client.router.fetch(request, server);

        return response;
    },
})