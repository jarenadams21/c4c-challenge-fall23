import { Shortened } from "../schema/urlData";
import { List, ListItem, Stack} from '@chakra-ui/react'
import { ButtonReveal } from "./ButtonReveal";

type UrlListProps = {
    urls: Array<Shortened>;
}

export const UrlList: React.FC<UrlListProps> = ({urls}) => {

    return (
        <List id="url-list">
        {urls.map((u) => (
          <ListItem key={u.id}>
          <Stack justifyContent='center' alignItems='center' direction='column' h='100px' p={4}>
          <ButtonReveal short={u.short} original={u.original}/>
          </Stack>
          </ListItem>
        ))}
          </List>
    )
}