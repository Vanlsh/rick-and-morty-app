import {Card, CardContent, CardMedia,Typography} from '@mui/material';
import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import {characterAPI} from "../../../services/CharacterService";
import s from "./Details.module.scss"
interface Props {
    id: number
}
interface Episode {
    name: string
}
const Details = ({id}: Props) => {
    const {character} = useAppSelector(state => state.characterReducer)
    const item = character.find(value => value.id === id)
    const {data: episodes} = characterAPI.useFetchEpisodeQuery(item ? item.episodes : [1])

    const getEpisodes = () : string => {
        let episodeString: string = ''
        if(episodes && Array.isArray(episodes)) {
            episodes.map((episode: Episode, index: number) => {
                if(index < episodes.length - 1) {
                    episodeString += episode.name + ", "
                } else {
                    episodeString += episode.name
                }
            })
        }  else if (episodes){
            episodeString = episodes.name
        }
        return episodeString
    }
    return (
        <div className={s.container}>
            <Card sx={{ maxWidth: 1000 }}>
                <CardMedia
                    component="img"
                    height="600"
                    image={String(item?.image)}
                    alt="avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item?.name}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Species
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item?.species}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gender
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item?.gender}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Location
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item?.location.name}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Episode:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {getEpisodes()}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Status:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item?.status}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Created:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item?.created}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Details;