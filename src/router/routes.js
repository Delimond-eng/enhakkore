import index from "@/components/index";
import aboutPage from "@/components/pages/page_about";
import eventsPage from "@/components/pages/single_all_events_page";
import exhortationsPage from "@/components/pages/single_all_exhortations_page";
import formationsPage from "@/components/pages/single_all_formations_page";
import jeuxPage from "@/components/pages/single_all_jeux_page";
import livresPage from "@/components/pages/single_all_livres_page";
import citationsPage from "@/components/pages/single_all_citations_page";


//details
import jeuDetailsPage from "@/components/pages/details/jeu_details";
import exhortationDetailsPage from "@/components/pages/details/exhortation_detail";


const routes = [{
        path: '/',
        component: index,
        name: 'home'

    },
    {
        path: '/a-propos',
        component: aboutPage,
        name: 'about'
    },

    {
        path: '/events/all',
        component: eventsPage,
        name: 'events'
    },

    {
        path: '/exhortations/all',
        component: exhortationsPage,
        name: 'exhortations'
    },

    {
        path: '/exhortations/comment',
        component: exhortationDetailsPage,
        name: 'ex-comment'
    },

    {
        path: '/formations/all',
        component: formationsPage,
        name: 'formations'
    },

    {
        path: '/livres/all',
        component: livresPage,
        name: 'livres'
    },

    {
        path: '/citations/all',
        component: citationsPage,
        name: 'citations'
    },
    {
        path: '/jeux/all',
        component: jeuxPage,
        name: 'jeux'
    },
    {
        path: '/jeu/questions/:jeu',
        component: jeuDetailsPage,
        name: 'questions',
    }


];
export default routes;