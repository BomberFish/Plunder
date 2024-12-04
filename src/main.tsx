import 'dreamland/dev';

import { Route, Router } from 'dreamland-router';
import Landing from './routes/landing';
import NotFound from './routes/not-found';
import Game from './routes/game';
import UIDemo from './routes/ui-system-demo';

//base styles
import './index.css';
let router = new Router(
    <Route>
        <Route path="/" show={<Landing />} />
        <Route path="/play" show={<Game />} />
        <Route path="/debug/only/please/just/dont/uidemo" show={<UIDemo />} />
        <Route path="*" show={<NotFound />} />
    </Route>
)
router.mount(document.getElementById('app')!);
