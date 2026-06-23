const form = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskPriorityInput = document.getElementById('task-priority');
const errorMessage = document.getElementById('error-message');
const pendingCount = document.getElementById('pending-count');
const tasksList = document.getElementById('tasks-list');

let tareas = [];

function mostrarError(mensaje) {
  errorMessage.textContent = mensaje;

  if (mensaje === '') {
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
}

function renderTareas() {
  tasksList.innerHTML = '';

  for (let i = 0; i < tareas.length; i++) {
    const task = tareas[i];

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>Prioridad: ${task.priority}</p>
      <p>Estado: ${task.completed ? 'Completada' : 'Pendiente'}</p>
       <button class="complete-btn">Marcar como completada</button>
    `;

    tasksList.appendChild(taskElement);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = taskTitleInput.value;
  const priority = taskPriorityInput.value;

  if (title.trim() === '') {
    mostrarError('Por favor, ingrese un título para la tarea.');
    return;
  }

  if (priority === '') {
    mostrarError('Por favor, seleccione una prioridad para la tarea.');
    return;
  }

  const nuevaTarea = {
    id: Date.now(),
    title,
    priority,
    completed: false,
  };

  tareas.push(nuevaTarea);

  mostrarError('');
  renderTareas();
  form.reset();
});
