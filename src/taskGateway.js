const baseUrl =
    "https://5e39d9d88d7e1300149cd70c.mockapi.io/api/v1/to_do_list";


export const createTask = (taskData) =>
    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });


export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
}

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to create task");
        }
    });
}

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE"
    }).then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
    });
}