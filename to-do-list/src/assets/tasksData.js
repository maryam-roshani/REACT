const d1 = new Date(2024, 5, 10, 10, 33)
const d2 = new Date(2024, 5, 15, 22, 23)
const d3 = new Date(2024, 5, 14, 12, 33)

const data = [
    { id: 1, title: "task-1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt lacus, vitae mattis dolor. Duis nunc erat, blandit a.", priority: "high", status: "done", time_added: d1 },
    { id: 2, title: "task-2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt lacus, vitae mattis dolor. Duis nunc erat, blandit a.", priority: "medium", status: "cancelled", time_added: d2 },
    { id: 3, title: "task-3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tincidunt lacus, vitae mattis dolor. Duis nunc erat, blandit a.", priority: "low", status: "in progress...", time_added: d3 }
]

export default data