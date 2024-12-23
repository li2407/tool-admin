interface dragPosition {
    position: {
        id: string | null,
        children: []
    }
}

export default {
    namespace: 'drag-position',
    state: {
        position: {}
    },
    reducers: {
        setPosition(state: { position: any }, data: any) {
            return state.position = data
        }
    }
}