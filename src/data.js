export const API_KEY="AIzaSyBXGQPfs5d5h55LsX1XJ7zKX31Tr6Wqnyg"
// save in variable and then export so that we ca use 





export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}