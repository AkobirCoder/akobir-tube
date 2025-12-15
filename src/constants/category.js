import { 
    Checkroom, 
    DeveloperMode, 
    FaceRetouchingNatural, 
    FitnessCenter, 
    GraphicEq, 
    Home, 
    LiveTv, 
    MusicNote, 
    OndemandVideo, 
    School,
    SportsEsports, 
    SportsGymnastics, 
    TheaterComedy 
} from "@mui/icons-material"; 

export const category = [
    {name: 'New', icon: <Home />},
    {name: 'Movie', icon: <OndemandVideo />},
    {name: 'Live', icon: <LiveTv />},
    {name: 'Gaming', icon: <SportsEsports />},
    {name: 'Education', icon: <School />},
    {name: 'Sport', icon: <SportsGymnastics />},
    {name: 'Comedy', icon: <TheaterComedy />},
    {name: 'Podcast', icon: <GraphicEq />},
    {name: 'Fashion', icon: <Checkroom />},
    {name: 'Crypto', icon: <DeveloperMode />},
    {name: 'Gym', icon: <FitnessCenter />},
    {Name: 'Beauty', icon: <FaceRetouchingNatural />},
    {name: 'Music', icon: <MusicNote />},
];