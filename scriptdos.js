document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const existingClientBtn = document.getElementById('existing-client-btn');
    const newClientBtn = document.getElementById('new-client-btn');
    const clientNameInput = document.getElementById('client-name');
    const clientPhoneInput = document.getElementById('client-phone');
    const clientEmailInput = document.getElementById('client-email');
    const clientAddressInput = document.getElementById('client-address');
    const createOrderBtn = document.getElementById('create-order-btn');
    const registerClientBtn = document.getElementById('register-client-btn');
    const orderForm = document.getElementById('order-form');
    const orderDateInput = document.getElementById('order-date');
    const deliveryDateInput = document.getElementById('delivery-date');
    const submitOrderBtn = document.getElementById('submit-order-btn');

    // Inicializar la interfaz
    initializeUI();

    // Funciones de inicialización
    function initializeUI() {
        // Configurar eventos
        setupEventListeners();
        
        // Inicializar fechas
        setupDateInputs();
    }

    function setupEventListeners() {
        // Botones de acción
        createOrderBtn.addEventListener('click', function() {
            if (validateClientForm()) {
                orderForm.style.display = 'block';
                scrollToElement(orderForm);
            }
        });
        
        registerClientBtn.addEventListener('click', function() {
            if (validateClientForm()) {
                // Simular registro de cliente
                const clientData = {
                    name: clientNameInput.value,
                    phone: clientPhoneInput.value,
                    email: clientEmailInput.value,
                    address: clientAddressInput.value
                };
                
                // En una aplicación real, aquí se enviaría a la base de datos
                console.log('Registrando cliente:', clientData);
                
                alert('Cliente registrado correctamente');
                
                // Opcionalmente, mostrar el formulario de pedido
                orderForm.style.display = 'block';
                scrollToElement(orderForm);
            }
        });
        
        // Emitir pedido
        submitOrderBtn.addEventListener('click', function() {
            if (validateOrderForm()) {
                // Recopilar datos del cliente y del pedido
                const orderData = {
                    client: {
                        name: clientNameInput.value,
                        phone: clientPhoneInput.value,
                        email: clientEmailInput.value,
                        address: clientAddressInput.value
                    },
                    order: {
                        orderDate: orderDateInput.value,
                        deliveryDate: deliveryDateInput.value,
                        // Aquí se recopilarían los productos
                        observations: document.getElementById('observations').value
                    }
                };
                
                // En una aplicación real, aquí se enviaría a la base de datos
                console.log('Emitiendo pedido:', orderData);
                
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

    // Funciones de validación
    function validateClientForm() {
        if (!clientNameInput.value.trim()) {
            alert('Por favor, ingrese el nombre del cliente');
            clientNameInput.focus();
            return false;
        }
        
        if (!clientPhoneInput.value.trim()) {
            alert('Por favor, ingrese el teléfono del cliente');
            clientPhoneInput.focus();
            return false;
        }
        
        if (!clientEmailInput.value.trim()) {
            alert('Por favor, ingrese el correo electrónico del cliente');
            clientEmailInput.focus();
            return false;
        }
        
        if (!clientAddressInput.value.trim()) {
            alert('Por favor, ingrese la dirección del cliente');
            clientAddressInput.focus();
            return false;
        }
        
        return true;
    }

    function validateOrderForm() {
        // Validar fechas
        if (!orderDateInput.value) {
            alert('Por favor, ingrese la fecha de pedido');
            orderDateInput.focus();
            return false;
        }
        
        if (!deliveryDateInput.value) {
            alert('Por favor, ingrese la fecha de entrega');
            deliveryDateInput.focus();
            return false;
        }
        
        // Aquí se podrían agregar más validaciones para los productos
        
        return true;
    }

    // Funciones de utilidad
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }

    function scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

//Validadores

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const existingClientBtn = document.getElementById('existing-client-btn');
    const newClientBtn = document.getElementById('new-client-btn');
    const clientNameInput = document.getElementById('client-name');
    const clientPhoneInput = document.getElementById('client-phone');
    const clientEmailInput = document.getElementById('client-email');
    const clientAddressInput = document.getElementById('client-address');
    const createOrderBtn = document.getElementById('create-order-btn');
    const registerClientBtn = document.getElementById('register-client-btn');
    const orderForm = document.getElementById('order-form');
    const orderDateInput = document.getElementById('order-date');
    const deliveryDateInput = document.getElementById('delivery-date');
    const submitOrderBtn = document.getElementById('submit-order-btn');

    // Inicializar la interfaz
    initializeUI();

    // Funciones de inicialización
    function initializeUI() {
        // Configurar eventos
        setupEventListeners();
        
        // Inicializar fechas
        setupDateInputs();
        
        // Configurar validaciones en tiempo real
        setupLiveValidation();
    }

    function setupEventListeners() {
        // Botones de acción
        createOrderBtn.addEventListener('click', function() {
            if (validateClientForm()) {
                orderForm.style.display = 'block';
                scrollToElement(orderForm);
            }
        });
        
        registerClientBtn.addEventListener('click', function() {
            if (validateClientForm()) {
                // Simular registro de cliente
                const clientData = {
                    name: clientNameInput.value,
                    phone: clientPhoneInput.value,
                    email: clientEmailInput.value,
                    address: clientAddressInput.value
                };
                
                // En una aplicación real, aquí se enviaría a la base de datos
                console.log('Registrando cliente:', clientData);
                
                alert('Cliente registrado correctamente');
                
                // Opcionalmente, mostrar el formulario de pedido
                orderForm.style.display = 'block';
                scrollToElement(orderForm);
            }
        });
        
        // Emitir pedido
        submitOrderBtn.addEventListener('click', function() {
            if (validateOrderForm()) {
                // Recopilar datos del cliente y del pedido
                const orderData = {
                    client: {
                        name: clientNameInput.value,
                        phone: clientPhoneInput.value,
                        email: clientEmailInput.value,
                        address: clientAddressInput.value
                    },
                    order: {
                        orderDate: orderDateInput.value,
                        deliveryDate: deliveryDateInput.value,
                        // Aquí se recopilarían los productos
                        observations: document.getElementById('observations').value
                    }
                };
                
                // En una aplicación real, aquí se enviaría a la base de datos
                console.log('Emitiendo pedido:', orderData);
                
                alert('Pedido emitido correctamente');
            }
        });
    }

    function setupLiveValidation() {
        // Validación en tiempo real para el teléfono
        clientPhoneInput.addEventListener('input', function() {
            // Permitir solo dígitos
            this.value = this.value.replace(/\D/g, '');
            
            // Limitar a 10 dígitos
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
            
            // Verificar si comienza con 351
            if (this.value.length >= 3 && !this.value.startsWith('351')) {
                this.setCustomValidity('El número debe comenzar con 351 (Córdoba)');
                this.style.borderColor = 'red';
            } else {
                this.setCustomValidity('');
                this.style.borderColor = '';
            }
        });
        
        // Validación en tiempo real para la dirección
        clientAddressInput.addEventListener('input', function() {
            const addressValue = this.value.trim();
            
            // Verificar si contiene al menos un número y texto
            const hasNumber = /\d/.test(addressValue);
            const hasText = /[a-zA-Z]/.test(addressValue);
            
            if (hasNumber && hasText) {
                this.setCustomValidity('');
                this.style.borderColor = 'green';
            } else {
                this.setCustomValidity('La dirección debe contener tanto texto como un número');
                this.style.borderColor = 'red';
            }
        });
        
        // Validación en tiempo real para el correo electrónico
        clientEmailInput.addEventListener('input', function() {
            const emailRegex = /@.*\.com$/;
            
            if (this.value && !emailRegex.test(this.value)) {
                this.setCustomValidity('El correo debe contener @ y terminar en .com');
                this.style.borderColor = 'red';
            } else {
                this.setCustomValidity('');
                this.style.borderColor = '';
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

    // Funciones de validación
    function validateClientForm() {
        // Validar nombre (solo que no esté vacío)
        if (!clientNameInput.value.trim()) {
            showError(clientNameInput, 'Por favor, ingrese el nombre del cliente');
            return false;
        }
        
        // Validar teléfono (10 dígitos y comienza con 351)
        const phoneValue = clientPhoneInput.value.trim();
        if (!phoneValue) {
            showError(clientPhoneInput, 'Por favor, ingrese el teléfono del cliente');
            return false;
        }
        
        if (phoneValue.length !== 10) {
            showError(clientPhoneInput, 'El teléfono debe tener exactamente 10 dígitos');
            return false;
        }
        
        if (!phoneValue.startsWith('351')) {
            showError(clientPhoneInput, 'El teléfono debe comenzar con el código de área 351 (Córdoba)');
            return false;
        }
        
        // Validar correo electrónico (debe contener @ y .com)
        const emailValue = clientEmailInput.value.trim();
        if (!emailValue) {
            showError(clientEmailInput, 'Por favor, ingrese el correo electrónico del cliente');
            return false;
        }
        
        if (!emailValue.includes('@') || !emailValue.endsWith('.com')) {
            showError(clientEmailInput, 'Ingrese un correo electrónico válido que contenga @ y termine en .com');
            return false;
        }
        
        // Validar dirección (no vacía y debe contener número y texto)
        const addressValue = clientAddressInput.value.trim();
        if (!addressValue) {
            showError(clientAddressInput, 'Por favor, ingrese la dirección del cliente');
            return false;
        }
        
        // Verificar si contiene al menos un número
        const hasNumber = /\d/.test(addressValue);
        if (!hasNumber) {
            showError(clientAddressInput, 'La dirección debe incluir un número');
            return false;
        }
        
        // Verificar si contiene texto (letras)
        const hasText = /[a-zA-Z]/.test(addressValue);
        if (!hasText) {
            showError(clientAddressInput, 'La dirección debe incluir el nombre de la calle');
            return false;
        }
        
        return true;
    }

    function validateOrderForm() {
        // Validar fechas
        if (!orderDateInput.value) {
            showError(orderDateInput, 'Por favor, ingrese la fecha de pedido');
            return false;
        }
        
        if (!deliveryDateInput.value) {
            showError(deliveryDateInput, 'Por favor, ingrese la fecha de entrega');
            return false;
        }
        
        // Aquí se podrían agregar más validaciones para los productos
        
        return true;
    }

    // Funciones de utilidad
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }

    function scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function showError(inputElement, message) {
        // Resaltar el campo con error
        inputElement.style.borderColor = 'red';
        
        // Mostrar mensaje de error
        alert(message);
        
        // Enfocar el campo con error
        inputElement.focus();
        
        // Restaurar el estilo después de un tiempo
        setTimeout(() => {
            inputElement.style.borderColor = '';
        }, 3000);
    }
});