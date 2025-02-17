export interface RegisterRes {
    message: string,
}

export interface RegisterAPIRes {
    message: string,
    token: string,
    user: {
        firstName: string
        lastName: string
        email: string
        gender: string
        phone: string
        photo: string
        role: string
        wishlist: any[]
        _id: string
        addresses: any[]
        createdAt: string
    }
}