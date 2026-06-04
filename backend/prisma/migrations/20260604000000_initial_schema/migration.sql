CREATE TABLE `users` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `research_sessions` (
  `id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `topic` TEXT NOT NULL,
  `status` ENUM('pending', 'running', 'completed', 'failed') NOT NULL DEFAULT 'pending',
  `total_tokens` INTEGER NOT NULL DEFAULT 0,
  `total_cost` DECIMAL(18,8) NOT NULL DEFAULT 0,
  `total_steps` INTEGER NOT NULL DEFAULT 0,
  `started_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `completed_at` DATETIME(3) NULL,
  PRIMARY KEY (`id`),
  KEY `research_sessions_user_id_idx` (`user_id`),
  KEY `research_sessions_status_idx` (`status`),
  CONSTRAINT `research_sessions_user_id_fkey`
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `agents` (
  `id` VARCHAR(36) NOT NULL,
  `session_id` VARCHAR(36) NOT NULL,
  `agent_name` VARCHAR(191) NOT NULL,
  `status` ENUM('pending', 'running', 'completed', 'failed') NOT NULL DEFAULT 'pending',
  `input_data` JSON NULL,
  `output_data` JSON NULL,
  `token_usage` INTEGER NOT NULL DEFAULT 0,
  `cost` DECIMAL(18,8) NOT NULL DEFAULT 0,
  `execution_time_ms` INTEGER NOT NULL DEFAULT 0,
  `retries` INTEGER NOT NULL DEFAULT 0,
  `error` TEXT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `agents_session_id_idx` (`session_id`),
  KEY `agents_agent_name_idx` (`agent_name`),
  CONSTRAINT `agents_session_id_fkey`
    FOREIGN KEY (`session_id`) REFERENCES `research_sessions`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `agent_steps` (
  `id` VARCHAR(36) NOT NULL,
  `agent_id` VARCHAR(36) NOT NULL,
  `step_number` INTEGER NOT NULL,
  `tool_name` VARCHAR(255) NOT NULL,
  `arguments` JSON NOT NULL,
  `response` JSON NULL,
  `prompt_tokens` INTEGER NOT NULL DEFAULT 0,
  `completion_tokens` INTEGER NOT NULL DEFAULT 0,
  `cost` DECIMAL(18,8) NOT NULL DEFAULT 0,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `agent_steps_agent_id_idx` (`agent_id`),
  UNIQUE KEY `agent_steps_agent_id_step_number_key` (`agent_id`, `step_number`),
  CONSTRAINT `agent_steps_agent_id_fkey`
    FOREIGN KEY (`agent_id`) REFERENCES `agents`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `reports` (
  `id` VARCHAR(36) NOT NULL,
  `session_id` VARCHAR(36) NOT NULL,
  `executive_summary` TEXT NOT NULL,
  `key_findings` JSON NOT NULL,
  `detailed_analysis` LONGTEXT NULL,
  `references` JSON NOT NULL,
  `conclusion` TEXT NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `reports_session_id_key` (`session_id`),
  CONSTRAINT `reports_session_id_fkey`
    FOREIGN KEY (`session_id`) REFERENCES `research_sessions`(`id`)
    ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `model_pricing` (
  `id` VARCHAR(36) NOT NULL,
  `model_name` VARCHAR(191) NOT NULL,
  `input_cost_per_million` DECIMAL(18,8) NOT NULL,
  `output_cost_per_million` DECIMAL(18,8) NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `model_pricing_model_name_key` (`model_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `model_pricing` (`id`, `model_name`, `input_cost_per_million`, `output_cost_per_million`)
VALUES
  (UUID(), 'deepseek-ai/DeepSeek-V3.2', 0.27000000, 1.10000000),
  (UUID(), 'Qwen/Qwen3.6', 0.30000000, 1.20000000);
