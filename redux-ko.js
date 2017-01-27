(function (global) {
    'use strict';
    
    const connect = (store) => (stateToProps, dispatchToProps) => (ViewModel) => {
        const initialState = store.getState();

        let props = stateToProps(initialState);

        const vm = new ViewModel(
            Object.assign(
                {},
                props,
                dispatchToProps(store.dispatch)
            )
        );

        store.subscribe(() => {
            const state = store.getState();

            const props = Object.assign(
                {},
                stateToProps(state),
                dispatchToProps(store.dispatch)
            );

            Object.keys(vm)
                .filter((key) => ko.isObservable(vm[key]))
                .forEach((key) => vm[key](props[key]));
        });

        return vm;
    };

    window.ReduxKo = {
        connect
    };
})(window);
