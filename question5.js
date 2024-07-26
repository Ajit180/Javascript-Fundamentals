function getDeliveryTime(packageType) {
    let deliveryTime;

    // Switch statement to determine the delivery time based on the package type
    switch (packageType.toLowerCase()) {
        case 'standard':
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'Next day';
            break;
        default:
            deliveryTime = 'Invalid package type';
            break;
    }

    // Print the estimated delivery time
    console.log(`The estimated delivery time for ${packageType} package is: ${deliveryTime}`);
}

// Test cases
getDeliveryTime('standard');  // Output: The estimated delivery time for standard package is: 3-5 days
getDeliveryTime('express');   // Output: The estimated delivery time for express package is: 1-2 days
getDeliveryTime('overnight'); // Output: The estimated delivery time for overnight package is: Next day
getDeliveryTime('same day');  // Output: The estimated delivery time for same day package is: Invalid package type
