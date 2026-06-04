-- AddForeignKey
ALTER TABLE `research_sessions` ADD CONSTRAINT `research_sessions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agents` ADD CONSTRAINT `agents_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `research_sessions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agent_steps` ADD CONSTRAINT `agent_steps_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `agents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `research_sessions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
