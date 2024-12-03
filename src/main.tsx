import 'dreamland/dev';

import { Route, Router } from 'dreamland-router';
import Landing from './routes/landing';
import NotFound from './routes/not-found';
import Game from './routes/game';

//base styles
import './index.css';
let router = new Router(
    <Route>
        <Route path="/" show={<Landing />} />
        <Route path="/play" show={<Game />} />
        <Route path="*" show={<NotFound />} />
    </Route>
)
router.mount(document.getElementById('app')!);
