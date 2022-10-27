import { router, publicProcedure } from "../trpc"
import { z } from "zod";

export const riotRouter = router({
	summoner: publicProcedure
	 .input(z.object({ 
		summonerName: z.string()
	}))
	.query( async ({ input }) => {
		const summoner = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input.summonerName}?api_key=RGAPI-bc5cfafa-8089-4998-9e46-61024d627d2e`, {
			headers: {
				"X-Riot-Token": "RGAPI-bc5cfafa-8089-4998-9e46-61024d627d2e"
		  	}
		});
		console.log('be:',await summoner.json());
	  	return {
        summoner: summoner,
      };
	}),
});
