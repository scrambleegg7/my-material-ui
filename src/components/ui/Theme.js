import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = "#868686"

export default createMuiTheme(
    {
        palette:{
            common: {
                blue: arcBlue,
                orange: arcOrange,
            },
            primary: {
                main: arcBlue
            },
            secondary: {
                main : arcOrange
            }
        },
        typography: {
            h3: {
                fontFamily: "Pacifico",
                fontSize: "2.5em",
                color: arcBlue
            },
            h4: {
                fontFamily: "Raleway",
                fontSize: "1.75em",
                color: arcBlue,
                fontWeight: 700,
            },
            subtitle1: {
                fontSize: "1.25em",
                fontWeight: 300,
                color: arcGrey,

            },
            tab: {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem",         
            },
            estimate: {
                //fontFamily: "Pacifico",
                fontSize: "1rem",
                textTransform: "none",
        
            }
        }
    }
);

