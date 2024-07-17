import exp from "constants";

export interface UserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  designation: string;
  roles: {
    permissions: {
      canManageOrgMembers: boolean;
      canManageOrg: boolean;
      canManageRoles: boolean;
    };
    _id: string;
    name: string;
    organization: string;
    isEditable: boolean;
  }[];
  isActive: boolean;
  onboardingComplete: boolean;
  credential: { _id: string; userType: string };
  organization: { _id: string; name: string; owner: string };
  message: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  token: string | null;
  user: UserInterface | null;
}

// Login

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    roles: {
      permissions: {
        canManageOrgMembers: boolean;
        canManageOrg: boolean;
        canManageRoles: boolean;
      };
      _id: string;
      name: string;
      organization: string;
      isEditable: boolean;
    }[];
    isActive: boolean;
    onboardingComplete: boolean;
    credential: { _id: string; userType: string };
    organization: { _id: string; name: string; owner: string }[];
    message: string;
    accessToken: string;
    refreshToken: string;
  };
}

// Register

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  tel?: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    credentialId: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    onbordingComplete: boolean;
    _id: string;
  };
}

// org

export interface OrgRequest {
  name: string;
  owner: string;
}

export interface OrgResponse {
  message: string;
  organization: {
    name: string;
    owner: string;
    _id: string;
  };
}
