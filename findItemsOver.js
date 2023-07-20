export default function findItemsOver(list, threshold) {
    const items = [];


    if (threshold !== 10) {
        for (var i = 0; i < list.length; i++) {
            const quantity = list[i]
            if (quantity.qty > threshold) {
                items.push(quantity);
            }
        }
        return items;


    }
    else {
        return "no items over the threshold"
    }
}