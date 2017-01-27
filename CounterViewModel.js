const CounterViewModel = function (props) {
    this.numberOfClicks = ko.observable(props.numberOfClicks);

    this.registerClick = () => {
        props.click(this.numberOfClicks() + 1);
    };
};
