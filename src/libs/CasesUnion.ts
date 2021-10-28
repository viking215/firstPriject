export const updateObjectOfArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    return items.map((f: any) => {
        if (f[objPropName] === itemId) {
            return {...f, ...newObjProps}
        }
        return f;

    })
}