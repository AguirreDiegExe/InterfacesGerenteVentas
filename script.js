document.addEventListener('DOMContentLoaded', function() {
    // Simulación de base de datos de clientes
    const clientDatabase = [
        {
            id: 1,
            name: 'Restaurante El sabor',
            address: 'San Lorenzo 345, Nueva Cordoba',
            type: 'restaurant'
        },
        {
            id: 2,
            name: 'Bodegon Lo de geronimo',
            address: 'Parana 342, Centro',
            type: 'restaurant'
        },
        {
            id: 3,
            name: 'Comedor comunitario',
            address: 'Pasaje Hilario ferndez 1111, Nueva Cordoba',
            type: 'community'
        },
        {
            id: 4,
            name: 'Café del Centro',
            address: 'Av. Colón 500, Centro',
            type: 'cafe'
        },
        {
            id: 5,
            name: 'Restaurante La Esquina',
            address: 'Calle Belgrano 123, Alberdi',
            type: 'restaurant'
        },
        {
            id: 6,
            name: 'Panadería El Molino',
            address: 'Av. Patria 789, Alta Córdoba',
            type: 'bakery'
        },
        {
            id: 7,
            name: 'Hotel Continental',
            address: 'Av. General Paz 200, Centro',
            type: 'hotel'
        },
        {
            id: 8,
            name: 'Supermercado El Ahorro',
            address: 'Calle Duarte Quirós 1500, Alto Alberdi',
            type: 'supermarket'
        }
    ];

    // Referencias a elementos del DOM
    const existingClientBtn = document.getElementById('existing-client-btn');
    const newClientBtn = document.getElementById('new-client-btn');
    const searchInput = document.getElementById('search-client');
    const searchBtn = document.getElementById('search-btn');
    const clientList = document.getElementById('client-list');
    const selectClientBtn = document.getElementById('select-client-btn');
    const createOrderBtn = document.getElementById('create-order-btn');
    const orderForm = document.getElementById('order-form');
    const orderDateInput = document.getElementById('order-date');
    const deliveryDateInput = document.getElementById('delivery-date');
    const submitOrderBtn = document.getElementById('submit-order-btn');

    // Variables de estado
    let selectedClientId = null;

    // Inicializar la interfaz
    initializeUI();

    // Funciones de inicialización
    function initializeUI() {
        // Cargar clientes iniciales (los primeros 3 como ejemplo)
        renderClientList(clientDatabase.slice(0, 3));
        
        // Configurar eventos
        setupEventListeners();
        
        // Inicializar fechas
        setupDateInputs();
    }

    function setupEventListeners() {
        // Botones de tipo de cliente
        existingClientBtn.addEventListener('click', function() {
            existingClientBtn.classList.add('active');
            newClientBtn.classList.remove('active');
        });
        /*
        newClientBtn.addEventListener('click', function() {
            newClientBtn.classList.add('active');
            existingClientBtn.classList.remove('active');
            alert('Funcionalidad para nuevo cliente no implementada en esta versión');
        });
        */
        // Búsqueda de clientes
        searchBtn.addEventListener('click', searchClients);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchClients();
            }
        });
        
        // Selección de cliente
        selectClientBtn.addEventListener('click', function() {
            if (selectedClientId) {
                const selectedClient = clientDatabase.find(client => client.id === selectedClientId);
                alert(`Cliente seleccionado: ${selectedClient.name}`);
            } else {
                alert('Por favor, seleccione un cliente primero');
            }
        });
        
        // Crear orden
        createOrderBtn.addEventListener('click', function() {
            if (selectedClientId) {
                orderForm.style.display = 'block';
            } else {
                alert('Por favor, seleccione un cliente primero');
            }
        });
        
        // Emitir pedido
        submitOrderBtn.addEventListener('click', function() {
            if (validateOrderForm()) {
                alert('Pedido emitido correctamente');
            }
        });
    }

    function setupDateInputs() {
        // Configurar inputs de fecha
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        
        orderDateInput.value = formatDate(today);
        deliveryDateInput.value = formatDate(tomorrow);
        
        // Eventos para el datepicker
        orderDateInput.addEventListener('focus', function() {
            this.type = 'date';
            this.showPicker();
        });
        
        orderDateInput.addEventListener('blur', function() {
            if (!this.value) {
                this.type = 'text';
            }
        });
        
        deliveryDateInput.addEventListener('focus', function() {
            this.type = 'date';
            this.showPicker();
        });
        
        deliveryDateInput.addEventListener('blur', function() {
            if (!this.value) {
                this.type = 'text';
            }
        });
    }

    // Funciones de búsqueda y renderizado
    function searchClients() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Mostrar indicador de carga
        clientList.innerHTML = '<div class="loading">Buscando clientes...</div>';
        
        // Simular retraso de red (en una aplicación real, aquí iría la llamada a la API)
        setTimeout(() => {
            // Filtrar clientes
            const results = clientDatabase.filter(client => 
                client.name.toLowerCase().includes(searchTerm) || 
                client.address.toLowerCase().includes(searchTerm)
            );
            
            // Renderizar resultados
            if (results.length > 0) {
                renderClientList(results);
            } else {
                clientList.innerHTML = '<div class="no-results">No se encontraron clientes con ese criterio</div>';
            }
        }, 500); // Simular 500ms de retraso
    }

    function renderClientList(clients) {
        clientList.innerHTML = '';
        
        clients.forEach(client => {
            const clientItem = document.createElement('div');
            clientItem.className = 'client-item';
            clientItem.dataset.id = client.id;
            
            if (client.id === selectedClientId) {
                clientItem.classList.add('selected');
            }
            
            clientItem.innerHTML = `
                <div class="client-info">
                    <div class="client-name"><i class="fas fa-home"></i> ${client.name}</div>
                    <div class="client-address"><i class="fas fa-map-marker-alt"></i> ${client.address}</div>
                </div>
            `;
            
            // Evento de clic para seleccionar cliente
            clientItem.addEventListener('click', function() {
                // Deseleccionar todos los clientes
                document.querySelectorAll('.client-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Seleccionar este cliente
                this.classList.add('selected');
                selectedClientId = parseInt(this.dataset.id);
            });
            
            clientList.appendChild(clientItem);
        });
    }

    // Funciones de utilidad
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }

    function validateOrderForm() {
        // Validar fechas
        if (!orderDateInput.value) {
            alert('Por favor, ingrese la fecha de pedido');
            return false;
        }
        
        if (!deliveryDateInput.value) {
            alert('Por favor, ingrese la fecha de entrega');
            return false;
        }
        
        // Aquí se podrían agregar más validaciones para los productos
        
        return true;
    }
});