export const updateObjectOfArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(f => {
        if (f[objPropName] === itemId) {
            return {...f, ...newObjProps}
        }
        return f;

    })
}