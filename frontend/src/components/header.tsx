import React from "react";

interface HeaderProps{
    name?: string,
}

interface HeaderState{
    date: Date;
}

export default class Header extends React.Component<HeaderProps,HeaderState>{
    timerID: any;


    constructor(props: HeaderProps,){
        super(props);
        this.state = {date: new Date()};

        console.log(this.state.date.toLocaleTimeString());
    }

    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({date: new Date()});
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(): React.ReactNode { 
        return (
            <div>
                <p>
                    This is Header. The Time is now:{" "}
                    <p className="text-9xl">
                        {this.state.date.toLocaleTimeString()}
                    </p>
                </p>
            </div>
        );
    }
}