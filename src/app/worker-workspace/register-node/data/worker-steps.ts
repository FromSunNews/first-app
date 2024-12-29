import { Cpu } from "lucide-react";
import {
  FaDesktop,
  FaMobileAlt,
  FaApple,
  FaWindows,
  FaLinux,
  FaAndroid,
  FaUserPlus,
  FaServer,
  FaCog,
  FaCheckCircle,
  FaUser,
  FaKey
} from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";

/**
 * Step definitions for the worker node registration process
 * Based on Ray's worker node configuration requirements
 * @type {Array<{id: number, title: string, description: string, icon: Component}>}
 */
export const STEPS = [
  {
    id: 1,
    title: "Connect New Worker",
    description: "Connect running walnut services, you can install more service packages to have more earnings and hiring rate.",
    icon: FaUser
  },
  {
    id: 2,
    title: "Name Your Device",
    description: "Give your device a unique name to identify it in your network.",
    icon: FaUserPlus
  },
  {
    id: 3,
    title: "Select Operating System",
    description: "Choose the operating system your device is running.",
    icon: FaServer
  },
  {
    id: 4,
    title: "Select Device Type",
    description: "Specify whether your device is a desktop or mobile device.",
    icon: FaDesktop
  },
  {
    id: 5,
    title: "Script Installation",
    description: "Run this script on your device to set up the worker.",
    icon: FaCog
  },
  {
    id: 6,
    title: "Authorize Device",
    description: "Authorize your device to connect it to the network.",
    icon: FaKey
  },
  {
    id: 7,
    title: "Complete Setup",
    description: "Your device is now set up and ready to use.",
    icon: FaCheckCircle
  }
];

/**
 * Supported operating systems configuration for Ray worker nodes
 * Includes system requirements based on Ray's documentation
 * @type {Array<{name: string, icon: JSX.Element, description: string, requirements: Object}>}
 */
export const OPERATING_SYSTEMS = [
  {
    name: "Windows",
    icon: FaWindows,
    description: "Windows 7 and above",
    requirements: {
      cpu: "2 cores minimum",
      ram: "4GB minimum",
      storage: "10GB free space"
    }
  },
  {
    name: "macOS",
    icon: FaApple,
    description: "macOS 10.15 and above",
    requirements: {
      cpu: "2 cores minimum",
      ram: "4GB minimum",
      storage: "10GB free space"
    }
  },
  {
    name: "Linux",
    icon: FaLinux,
    description: "Ubuntu, Debian, CentOS",
    requirements: {
      cpu: "2 cores minimum",
      ram: "4GB minimum",
      storage: "10GB free space"
    }
  },
  {
    name: "Android",
    icon: FaAndroid,
    description: "Android 8.0 and above",
    requirements: {
      cpu: "1.5GHz minimum",
      ram: "3GB minimum",
      storage: "5GB free space"
    }
  },
  {
    name: "iOS",
    icon: FaApple,
    description: "iOS 13.0 and above",
    requirements: {
      cpu: "1.5GHz minimum",
      ram: "3GB minimum",
      storage: "5GB free space"
    }
  }
];

/**
 * Device types supported for Ray cluster nodes
 * CPU nodes for general computing and GPU nodes for AI/ML workloads
 * @type {Array<{name: string, icon: JSX.Element, description: string, requirements: Object}>}
 */
export const DEVICE_TYPES = [
  {
    name: "CPU",
    icon: Cpu,
    description: "Handle general tasks",
    requirements: {
      cpu: "2 cores minimum",
      ram: "4GB minimum",
      storage: "10GB free space"
    }
  },
  {
    name: "GPU",
    icon: BsGpuCard,
    description: "Handle AI tasks",
    requirements: {
      cpu: "1.5GHz minimum",
      ram: "3GB minimum",
      storage: "5GB free space"
    }
  }
];

/**
 * Validation rules for worker node registration form
 * Ensures data integrity and proper node configuration
 * @type {Object}
 */
export const VALIDATION_RULES = {
  deviceName: {
    minLength: 3,
    maxLength: 50,
    pattern: /^[a-zA-Z0-9-_]+$/,
    message: "Device name can only contain letters, numbers, hyphens and underscores"
  },
  required: {
    message: "This field is required"
  }
};

/**
 * Error messages for various scenarios during worker registration
 * Provides user-friendly feedback for error handling
 * @type {Object}
 */
export const ERROR_MESSAGES = {
  walletNotConnected: "Please connect your wallet first!",
  authorizationFailed: "Failed to authorize device. Please try again.",
  invalidDeviceName: "Invalid device name format",
  scriptError: "Error executing installation script",
  networkError: "Network connection error",
  osRequired: "Please select an operating system",
  deviceTypeRequired: "Please select a device type",
  deviceNameRequired: "Please enter a device name",
  deviceNameInvalid: "Invalid device name format",
  deviceNameTooShort: "Device name must be at least 3 characters",
  deviceNameTooLong: "Device name must be less than 50 characters",
  installationFailed: "Installation failed. Please try again.",
  authorizationTimeout: "Authorization timed out. Please try again."
};

/**
 * Installation status constants for tracking node setup progress
 * Maps to Ray's node initialization states
 * @type {Object}
 */
export const INSTALLATION_STATUS = {
  PENDING: 'pending',
  INSTALLING: 'installing',
  COMPLETED: 'completed',
  FAILED: 'failed'
};

/**
 * Authorization status constants for tracking node authentication
 * Used in conjunction with blockchain transaction states
 * @type {Object}
 */
export const AUTHORIZATION_STATUS = {
  PENDING: 'pending',
  AUTHORIZING: 'authorizing',
  COMPLETED: 'completed',
  FAILED: 'failed'
}; 