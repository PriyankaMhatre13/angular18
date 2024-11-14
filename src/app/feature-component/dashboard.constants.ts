import { z } from 'zod';

export const DashboardDataSchema = z.object({
    totalPatients: z.number().default(0),
    totalAppointments: z.number().default(0),
    todaysTotalAppointments: z.number().default(0),
    todaysTotalDoneAppointments: z.number().default(0)
});