const GetRandomColor = function (): string {
    const red: number = Math.floor(Math.random() * 128);
    const green: number = Math.floor(Math.random() * 128);
    const blue: number = Math.floor(Math.random() * 128);

    return `rgb(${red}, ${green}, ${blue})`;
} 

export default GetRandomColor;