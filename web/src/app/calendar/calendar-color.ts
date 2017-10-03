export class CalendarColor {
    getColor(color : string) : any {
        switch(color){
            case 'red':
                return {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                };
            case 'blue':
                return {
                    primary: '#1e90ff',
                    secondary: '#D1E8FF'
                };
            case 'yellow':
                return {
                    primary: '#e3bc08',
                    secondary: '#FDF1BA'
                };
            default:
                return {
                    primary: '#e3bc08',
                    secondary: '#FDF1BA'
                };
        }
    }
}