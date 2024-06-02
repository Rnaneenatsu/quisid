async function fetchAndLogUsers(): Promise<void> {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.error('An error occurred while fetching users:', error);
  }
}

// Call the function to fetch and log users
fetchAndLogUsers();
