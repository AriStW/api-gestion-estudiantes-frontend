# Gestión de Estudiantes - Frontend

Proyecto frontend desarrollado con **React** y **Material UI** para gestionar estudiantes y cursos. Permite listar, crear, editar y eliminar estudiantes, así como filtrar por curso.

---

## Tecnologías utilizadas

- **React 18**
- **Vite** como bundler
- **Material UI** para la interfaz
- **React Router** para navegación
- **Fetch API** para comunicación con backend
- Variables de entorno con **Vite** (`VITE_STUDENTS`, `VITE_TOKEN_STUDENTS`)

---

## Estructura del proyecto
src/
├─ components/ # Componentes reutilizables (StudentEditForm, StudentForm, etc.)
├─ context/ # Contextos globales (StudentContext)
├─ hooks/ # Custom hooks (useUpdateStudent, useDeleteStudent, etc.)
├─ pages/ # Páginas principales (Student, AddStudent, SearchCourse)
├─ services/ # Servicios para API (updateStudent, deleteStudent, searchStudent)
├─ App.jsx # Componente raíz
└─ main.jsx # Entrada principal de la aplicación

___

## Configuración

1. Clonar el repositorio:

git clone [Aqui]<https://github.com/AriStW/api-gestion-estudiantes-frontend>
cd api-gestion-estudiantes-frontend

2. Paquetes 

* dependencias: npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react react-dom react-router react-router-dom

* dev: npm install -D vite @vitejs/plugin-react eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh @types/react @types/react-dom globals

___

## Funcionalidades


* Listado de estudiantes con sus cursos

* Búsqueda y filtrado por curso

* Creación de nuevos estudiantes

* Edición de estudiantes existentes

* Eliminación de estudiantes

* Validaciones de formularios (campos obligatorios y selección mínima de cursos)

* Drawer para edición rápida de estudiantes
___
## Uso


### Listar estudiantes

- Al abrir la aplicación se muestra la lista completa de estudiantes con sus cursos.

### Filtrar por curso

- En la página de Inscripción, selecciona un curso en el Autocomplete para ver los estudiantes inscritos.

### Agregar estudiante

- Ir a la página Añadir Estudiante, completar el formulario y presionar Guardar.

### Editar estudiante

- En la lista de estudiantes, seleccionar el botón de editar para abrir el drawer y modificar la información.

### Eliminar estudiante

- En la lista de estudiantes, seleccionar el botón de eliminar para remover al estudiante.
___

## Ramas importantes

* putStudent: Lógica para actualizar estudiantes

* deleteService: Servicio de eliminación de estudiantes

* filterByCourse: Filtrado de estudiantes por curso
___
## Endpoints

| **Endpoints requeridos del backend**                                  |
|-----------------------------------------------------------------------|
|*GET* /api/estudiantes → Listar estudiantes                            |
|*GET* /api/estudiantes/filtrar/:curso → Filtrar estudiantes por curso  |
|*PUT* /api/estudiantes/:id → Actualizar estudiante                     |
|*DELETE* /api/estudiantes/:id → Eliminar estudiante                    |
|
___

## Licencia


_Este proyecto está bajo licencia MIT._

## 👩 AutorAutor
Nombre : **Sotomayor Ari S.**
LinkedIn: <www.linkedin.com/in/arisoledadsotomayor>
Fecha: 2025.
