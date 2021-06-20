import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://pt.wikipedia.org/wiki/Bruxelas#/media/Ficheiro:TE-Collage_Brussels.png',
        address: 'ENDEREÇO',
        description: 'description',
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://pt.wikipedia.org/wiki/Bruxelas#/media/Ficheiro:TE-Collage_Brussels.png',
        address: 'ENDEREÇO 2',
        description: 'description 2',
    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://pt.wikipedia.org/wiki/Bruxelas#/media/Ficheiro:TE-Collage_Brussels.png',
        address: 'ENDEREÇO 3',
        description: 'description 3',
    },
]

function HomePage(){
 return < MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;