import { v4 as uuidv4 } from "uuid";
function TextInj() {
    return [
        {
            title: "Informacije javnega značaja",
            text:'Lovska družina Pugled mora v skladu z določili Zakona o dostopu do informacij javnega značaja vsakomur omogočiti dostop do informacije javnega značaja in ponovno uporabo informacij javnega značaja, le v tistem delu, v katerem se te nanašajo na področje izvajanja javne službe oz. javnega pooblastila lovske družine, to je na sodelovanje pri izvajanju ukrepov preventivnega zdravstvenega varstva divjadi in dostavljanja poginule divjadi v veterinarski pregled, sodelovanja pri znanstveno-raziskovalnem delu v zvezi z divjadjo in lovstvom ter na področje trajnostnega gospodarjenja z divjadjo.',
            id: uuidv4(),
            active: true,
        },
        {
            title: "Afriška prašičja kuga",
            text:'Lorem Ipusm text',
            id: uuidv4(),
            active: false,
        },
        {
            title: "APK-Načrt ravnanja upravljalca loviščS",
            text:'Lorem Ipusm text',
            id: uuidv4(),
            active: false,
        },
        //ADD MORE HERE
        //Audio link can be found by watching network traffic in inspect page mode when recording the song being told to play
    ];
}

export default TextInj;